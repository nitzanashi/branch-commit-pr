import nanoid from 'nanoid';

(() => {
    console.log(`::set-env name=RANDOM_ID::${nanoid()}`);
})();
