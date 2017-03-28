/*
 * @Author slashhuang
 * REPL debugger模式
 * https://nodejs.org/api/debugger.html
 * 17/3/28
 */
  /**
 	Stepping#

	cont, c - Continue execution
	next, n - Step next
	step, s - Step in
	out, o - Step out
	pause - Pause running code (like pause button in Developer Tools)
  */	
  /**
  	Information#

	backtrace, bt - Print backtrace of current execution frame
	list(5) - List scripts source code with 5 line context (5 lines before and after)
	watch(expr) - Add expression to watch list
	unwatch(expr) - Remove expression from watch list
	watchers - List all watchers and their values (automatically listed on each breakpoint)
	repl - Open debugger's repl for evaluation in debugging script's context
	exec expr - Execute an expression in debugging script's context
   */
   /**
   Execution control#

	run - Run script (automatically runs on debugger's start)
	restart - Restart script
	kill - Kill script
	*/

const x = 5;
setTimeout(() => {
  debugger;
  console.log('world');
}, 1000);
console.log('hello');
