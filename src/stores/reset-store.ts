import cloneDeep from 'lodash.clonedeep';
import { PiniaPluginContext } from 'pinia';

function resetStore({ store }: PiniaPluginContext) {
    const initialState = cloneDeep(store.$state);
    store.$reset = () => store.$patch(cloneDeep(initialState));
}

export default resetStore;