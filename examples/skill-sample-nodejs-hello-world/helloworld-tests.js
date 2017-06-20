
/*
Mocha tests for the Alexa skill "Hello World" example (https://github.com/alexa/skill-sample-nodejs-hello-world).
Using the Alexa Skill Test Framework (https://github.com/BrianMacIntosh/alexa-skill-test-framework).

Run with 'mocha examples/skill-sample-nodejs-hello-world/helloworld-tests.js'.
*/

// include the testing framework
//const alexaTest = require('alexa-skill-test-framework');
const alexaTest = require('../../index');

// initialize the testing framework
alexaTest.initialize(
	require('./helloworld.js'),
	"amzn1.ask.skill.00000000-0000-0000-0000-000000000000",
	"amzn1.ask.account.VOID");

describe("Hello World Skill", function () {
	// tests the behavior of the skill's LaunchRequest
	describe("LaunchRequest", function () {
		alexaTest.test([
			{
				request: alexaTest.getLaunchRequest(),
				says: "Hello World!", repromptsNothing: true, shouldEndSession: true
			}
		]);
	});

	// tests the behavior of the skill's HelloWorldIntent
	describe("HelloWorldIntent", function () {
		alexaTest.test([
			{
				request: alexaTest.getIntentRequest("HelloWorldIntent"),
				says: "Hello World!", repromptsNothing: true, shouldEndSession: true
			}
		]);
	});
});
