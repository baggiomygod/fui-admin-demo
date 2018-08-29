### yarn
    特点：
    1. 快;
    2. 安全;
    3. 更简洁的输出;
    4. 更好的语义化;

    ```
        yarn add react-router // npm i react-router
    ```


### ts 中安装react-router radux...
    ```
        yarn add react-router-dom @types/react-router-dom
        yarn add axios @types/axios
        yarn add less-loader @types/axios -D
        yarn add stylus-loader @types/stylus-loader -D
        yarn add stylus @types/stylus -D
    ```

### 暴露项目配置
    ```
        yarn eject
        Are you sure you want to eject? This action is permanent: y
    ```

### react-app-rewired --按需引入antd的组件
    ```
        $ yarn add react-app-rewired --dev


        /* package.json */
        "scripts": {
        "start": "react-scripts-ts start",
        "build": "react-scripts-ts build",
        "test": "react-scripts-ts test --env=jsdom",

        "start": "react-app-rewired start --scripts-version react-scripts-ts",
        "build": "react-app-rewired build --scripts-version react-scripts-ts",
        "test": "react-app-rewired test --env=jsdom --scripts-version react-scripts-ts"
        }
    ```

    然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。

    ```
        module.exports = function override(config, env) {
            // do stuff with the webpack config...
            return config;
            };
    ```

##### 使用 ts-import-plugin --实现按需加载
    ts-import-plugin 是一个用于按需加载组件代码和样式的 TypeScript 插件（原理），现在我们尝试安装它并修改 config-overrides.js 文件
    ```
        arn add ts-import-plugin --dev

        /* config-overrides.js */
        const tsImportPluginFactory = require('ts-import-plugin')
        const { getLoader } = require("react-app-rewired");

        module.exports = function override(config, env) {
        const tsLoader = getLoader(
            config.module.rules,
            rule =>
            rule.loader &&
            typeof rule.loader === 'string' &&
            rule.loader.includes('ts-loader')
        );

        tsLoader.options = {
            getCustomTransformers: () => ({
            before: [ tsImportPluginFactory({
                libraryDirectory: 'es',
                libraryName: 'antd',
                style: 'css',
            }) ]
            })
        };

        return config;
        }
    ```

    > 报错 ```can not find nodule 'react-scripte-ts/package.json'```
    ```
        yarn add react-scripte-ts -D

        yarn start // success
    ```
