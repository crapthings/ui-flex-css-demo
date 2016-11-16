import _ from 'lodash'
import faker from 'faker'
import randomcolor from 'randomcolor'

Faker = faker

Blaze._allowJavascriptUrls()

Template.registerHelper('rc', function () {
  return randomcolor()
})

Template.registerHelper('list', function(length = 50) {
  return _.times(length, n => ({
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
  }))
})

Template.registerHelper('avatarUrl', function () {
  return faker.internet.avatar()
})
