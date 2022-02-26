#!/usr/bin/env -S node --no-warnings --loader ts-node/esm
/**
 *   Wechaty - https://github.com/chatie/wechaty
 *
 *   @copyright 2016-2018 Huan LI <zixia@zixia.net>
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */
import {
  test,
  sinon,
}             from 'tstest'

import {
  Test,
  TestingModule,
}                   from '@nestjs/testing'
import { 
  INestApplication, 
  Logger,
}                       from '@nestjs/common'
import { HeroesGameModule } from './heroes/heroes.module.js';

test('Friday Controler', async t => {
  let app: INestApplication
  let testingModule: TestingModule
  let sandbox: sinon.SinonSandbox

  t.beforeEach(async () => {
    sandbox = sinon.createSandbox()

    const builder = Test.createTestingModule({
      imports: [HeroesGameModule],
    })

    builder
      .setLogger(new Logger('E2ETesting'))

    testingModule = await builder.compile()

    app = testingModule.createNestApplication()
    await app.init()
  })

  t.afterEach(async () => {
    await app.close()
    await testingModule.close()
    sandbox.restore()
  })

  await t.test('POST chatops/:roomId', async t => {
    t.pass('ok')
  })

  t.teardown(async () => {
  })
})
