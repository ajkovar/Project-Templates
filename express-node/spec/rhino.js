
load('/usr/lib/ruby/gems/1.8/gems/jspec-3.3.2/lib/jspec.js')
load('/usr/lib/ruby/gems/1.8/gems/jspec-3.3.2/lib/jspec.xhr.js')
load('lib/yourlib.js')
load('spec/unit/spec.helper.js')

JSpec
.exec('spec/unit/spec.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
.report()