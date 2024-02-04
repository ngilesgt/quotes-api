import { App } from '@/app';
// import { AuthRoute } from '@routes/auth.route';
// import { UserRoute } from '@routes/users.route';
import { QuotesRoute } from '@routes/quotes.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

// const app = new App([new UserRoute(), new AuthRoute()]);

const app = new App([new QuotesRoute()]);

app.listen();
