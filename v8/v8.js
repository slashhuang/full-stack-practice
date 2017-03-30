/*
 * V8知识学习
 * @Author slashhuang
 * 17/3/30
 */

const v8 = require('v8');
/*
 * 返回v8的堆组成部分
 * [ { space_name: 'new_space',
    space_size: 2097152,
    space_used_size: 651728,
    space_available_size: 379952,
    physical_space_size: 2097152 },
  { space_name: 'old_space',
    space_size: 2052096,
    space_used_size: 1559616,
    space_available_size: 776,
    physical_space_size: 2052096 },
  { space_name: 'code_space',
    space_size: 2097152,
    space_used_size: 649728,
    space_available_size: 96,
    physical_space_size: 2097152 },
  { space_name: 'map_space',
    space_size: 1130496,
    space_used_size: 210056,
    space_available_size: 0,
    physical_space_size: 1130496 },
  { space_name: 'large_object_space',
    space_size: 0,
    space_used_size: 0,
    space_available_size: 1489972736,
    physical_space_size: 0 } ]

 */
console.log(v8.getHeapSpaceStatistics())
/*
 { total_heap_size: 7376896,
  total_heap_size_executable: 5242880,
  total_physical_size: 7376896,
  total_available_size: 1490292928,
  used_heap_size: 3516352,
  heap_size_limit: 1501560832 }
 */

console.log(v8.getHeapStatistics())








