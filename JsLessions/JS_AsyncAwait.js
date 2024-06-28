function i_take_10_sec()
    	{
    	 	 return new Promise((resolve,reject)=>{	setTimeout(() => { 
               console.log('I was no: 2 and I take 10 second');
               resolve();
    	 		}, 10000);
            });
    	}
 
    	async function run()
    	{
         console.log('I was no: 1 and I executed immediately');
    	 await i_take_10_sec();
         console.log('I was no: 3 and I should have executed after 2');
    	}
      
    	run();