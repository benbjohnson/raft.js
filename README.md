raft.js
=======

> An experimental Raft implementation in Javascript.


## Overview

The [Raft consensus protocol](https://ramcloud.stanford.edu/wiki/download/attachments/11370504/raft.pdf) is a protocol for agreeing on state across multiple processes.
This is especially important in the event of failures where multiple servers could become out of sync with one another.

The purpose of this library is initially to provide a backend for visualizing the Raft protocol using D3.js.
This library is not feature complete.
However, pull requests are welcome!
