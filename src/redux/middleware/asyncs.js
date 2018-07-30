export const async = (fImpl) => (store) => (next) => (action) => {
    if (action.type === 'async_action') {
        console.log(action);
        fImpl(action.payload.url);
    }
    else {
        next(action);
    }
}

// const async3 = (fImpl) => (store) => (next) => (action) => {
//     if (action.type === 'async_action') {
//         console.log(action);
//         fImpl(action.payload.url);
//     }
//     else {
//         next(action);
//     }
// }

// export const all = [async, async3];