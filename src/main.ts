import { reactive } from 'vue';
import { Application } from './app';
import { Entities } from './entities';

const entities = reactive(new Entities());
const app = new Application(entities);
app.run();
