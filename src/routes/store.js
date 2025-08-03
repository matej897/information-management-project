import router from 'express';
import { RequestContext } from '../infra/request-context.js';

export const storeRouter = router();

storeRouter.get('/', async (req, res) => {
  try {
    const result = await RequestContext.get('domainService').getStores();
    res.json(result);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
