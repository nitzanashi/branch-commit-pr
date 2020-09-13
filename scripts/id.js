const {nanoid} = require('nanoid');

(() => {
    console.log(`::set-env name=RANDOM_ID::${nanoid()}`);
})();
