const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  printMessage,
  startProject,
} = require('./utils')
const pkg = require('./package.json')

const templateVersion = pkg.version

const { addTestAnswers } = require('./scenarios')

module.exports = {
  metalsmith: {
    // When running tests for the template, this adds answers for the selected scenario
    before: addTestAnswers
  },
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version() {
      return templateVersion
    },
  },
  
  prompts: {
    /* type(类型):input(输入，默认类型), confirm（y/n）, list(列表), rawlist（带下标的列表）,
                 expand（下标是字母的列表）, checkbox（复选框）, password（密码）, 
                 editor（编辑大篇文字）*/
    /* 
      massage(提示信息——问题):字符串或者函数，如果是函数，返回值需要时字符串
    */
    /* default: （默认值） */
    /* choices（选项）: list,rawlist,expand,checkbox类型需要给出相应的choice供用户选择 */
    /* validate(有效性验证): 函数类型，参数是用户输入的结果，通过返回true，否则返回验证失败的提示。 */
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      when: 'isNotTest',
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project',
    },
    author: {
      when: 'isNotTest',
      type: 'string',
      message: 'Author',
    },
    cssPreprocessor: {
      when: 'isNotTest',
      type: 'list',
      message: 'Which CSS preprocessor to choose?',
      choices: [
        {
          name: 'sass',
          value: 'sass',
          short: 'sass',
        },
        {
          name: 'less',
          value: 'less',
          short: 'less',
        },
        {
          name: 'stylus',
          value: 'stylus',
          short: 'stylus',
        },
        {
          name: 'Do not use',
          value: 'Do not use',
          short: 'Do not use'
        }
      ]
    },
    thirdParty: {
      when: 'isNotTest',
      type: 'list',
      message: 'Which 第三方 component library to choose?',
      choices: [
        {
          name: 'element-ui',
          value: 'element-ui',
          short: 'element-ui',
        },
        {
          name: 'ant-design-vue',
          value: 'ant-design-vue',
          short: 'ant-design-vue',
        },
        {
          name: 'vant',
          value: 'vant',
          short: 'vant',
        },
        {
          name: 'other',
          value: 'other',
          short: 'other',
        }
      ]
    },
    envPackage: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Multi environment packaging',
    },
    router: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Install vue-router?',
    },
    vuex: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Install vuex?',
    },
    autoStartProject: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Auto start project after install?'
    }
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': "unit && runner === 'karma'",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit && runner === 'karma'",
    'test/unit/jest.conf.js': "unit && runner === 'jest'",
    'test/unit/karma.conf.js': "unit && runner === 'karma'",
    'test/unit/specs/index.js': "unit && runner === 'karma'",
    'test/unit/setup.js': "unit && runner === 'jest'",
    'test/e2e/**/*': 'e2e',
    'src/router/**/*': 'router',
    'src/store/**/*': 'vuex',
    '.env.production': 'envPackage',
    '.env.development': 'envPackage',
    '.env.test': 'envPackage',

  },
  complete: function(data, { chalk }) {
    console.log('================= prompts data ====================')
    console.log(data)
    
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    installDependencies(cwd, 'npm', green).then(() => {
      // 自动启动项目
      data.autoStartProject ? startProject(cwd, 'npm', green) : printMessage(data, chalk);
    }).catch(e => {
      console.log(chalk.red('Error:'), e);
    })
  },
  completeMessage: '渲染完成',
}
