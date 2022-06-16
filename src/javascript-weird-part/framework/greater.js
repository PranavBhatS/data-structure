(function (global, $) {
  const Greater = function (firstName, lastName, language) {
    return new Greater.init(firstName, lastName, language);
  };

  const supportedLanguage = ["en", "ka"];
  const greetings = {
    en: "hello",
    ka: "arama",
  };
  const formalGreetings = {
    en: "greetings",
    ka: "Swagata",
  };
  const logMessages = {
    en: "Logged in",
    ka: "Loggin agi",
  };
  Greater.prototype = {
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    validate: function (newLang) {
      newLang = newLang || this.language;
      return supportedLanguage.find((lang) => lang === newLang);
    },
    greeting: function () {
      return `${greetings[this.language]} ${this.firstName}!`;
    },
    formalGreeting: function () {
      return `${formalGreetings[this.language]}, ${this.fullName()}`;
    },
    say: function (formal) {
      let msg = formal ? this.formalGreeting() : this.greeting();
      if (console) {
        console.log(msg);
      }
      return this;
    },
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }
      return this;
    },
    setLang: function (lang) {
      if (!!this.validate()) {
        this.language = lang;
      } else {
        throw "language doesnot exists";
      }
      return this;
    },
  };
  Greater.init = function (firstName, lastName, language) {
    const self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";
  };

  Greater.init.prototype = Greater.prototype;

  global["G$"] = Greater;
})(window, jQuery);
