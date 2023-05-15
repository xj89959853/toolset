# toolset

Toolset 是一个 JavaScript 工具库，提供了一些常用的函数和方法，可以方便地用于开发 Web 应用程序。

当前版本提供了以下功能：

- 数组方法：range
- 字符串方法：truncate
- 函数方法：debounce 和 throttle



## 安装

可以使用 npm 或者 yarn 安装 Toolset：

```bash
npm install toolset
```

或者

```bash
yarn add toolset
```



## 使用

在使用之前，需要先导入 Toolset：

```js
import { range, truncate, debounce, throttle } from 'toolset';
```

然后就可以使用这些方法了。下面是一些使用示例：

**range**
```js
range(0, 5); // [0, 1, 2, 3, 4]
range(1, 5); // [1, 2, 3, 4]
range(0, 5, 2); // [0, 2, 4]
```

**truncate**
```js
truncate('Hello, world!', 5); // 'He...'
truncate('Hello, world!', 8); // 'Hello...'
truncate('Hello, world!', 20); // 'Hello, world!'
```

**debounce**
```js
const fn = debounce(() => console.log('Hello, world!'), 1000);
fn(); // 不会立即执行
fn(); // 不会立即执行
fn(); // 不会立即执行
// 1000 毫秒后，'Hello, world!' 只会被输出一次
```

**throttle**
```js
const fn = throttle(() => console.log('Hello, world!'), 1000);
fn(); // 立即执行
fn(); // 不会立即执行
fn(); // 不会立即执行
// 1000 毫秒后，'Hello, world!' 只会被输出两次
```



## 贡献

如果您在使用 Toolset 时遇到了问题，或者有任何建议和想法，请随时在 GitHub 上提出问题或者发起 PR。



## 许可证

Toolset 遵循 MIT 许可证。详情请参阅 LICENSE 文件。