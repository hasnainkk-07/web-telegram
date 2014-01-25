/*!
 * Webogram v0.1 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

onmessage = function (event) {
  var taskID = event.data.taskID;
  postMessage({taskID: taskID, result: sha1Hash(event.data.bytes)});
}
