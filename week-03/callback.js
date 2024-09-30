
function doJob(job, time, cb) {
    setTimeout(() => {
      // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
      let now = new Date();
      cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
  }
  
  // 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
  let now = new Date();
  console.log(`開始工作 at ${now.toISOString()}`);

  // write your code here
  doJob('刷牙', 1000, script => {
    console.log(script);
    doJob('吃早餐', 3000, script => {
        console.log(script);
        doJob('寫功課', 1000, script => {
            console.log(script);
            doJob('吃午餐', 2000, script => {
                console.log(script);
            })
        })
    })
  });

  