# Vue Composition API

Composition API的出现带来哪些新的开发体验，为啥需要这个？
	I:在compostion API中时根据逻辑相关组织代码的，提高可读性和可维护性，类似于react的hook写法。
	2:更好的重用逻辑代码，在options API中通过MIxins重用逻辑代码，容易发生命名冲突且关系不清。
	3:解决在生命周期函数经常包含不相关的逻辑，但又不得不把相关逻辑分离到了几个不同方法中的问题，如在ounted中设置定时器，但需要在destroyed中来清除定时器，将同一功能的代码拆分到不同的位置，造成后期代码维护的困难。