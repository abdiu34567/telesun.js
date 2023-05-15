const TEST_SESSION = {

    getUserId(defaultIs = 'TSession') {
        Context.api = Test_Constants().message
        let _Session;
        if (defaultIs === 'TSession') {
            _Session = TSession.id
        }
        else { _Session = PSession.id }
        if (_Session) Logger.log(Test_Constants().TEST_TITLES.getUserId)
    },

    setSessionValue(defaultIs = 'TSession') {
        let _Session;
        if (defaultIs === 'TSession') {
            _Session = TSession.setSessionValue('abdi', 'urgessa')
        }
        else { _Session = PSession.setSessionValue('abdi', 'urgessa') }
        if (_Session) Logger.log(Test_Constants().TEST_TITLES.setSessionValue)
    },

    getSession(defaultIs = 'TSession') {
        let _Session;
        if (defaultIs === 'TSession') {
            _Session = TSession.getSession()
        }
        else { _Session = PSession.getSession() }
        if (_Session) Logger.log(Test_Constants().TEST_TITLES.getSession)
    },
    getSessionValue(defaultIs = 'TSession') {
        let _Session;
        if (defaultIs === 'TSession') {
            _Session = TSession.getSessionValue('abdi')
        }
        else { _Session = PSession.getSessionValue('abdi') }
        if (_Session) Logger.log(Test_Constants().TEST_TITLES.getSessionValue)
    },
    setSessionValues(defaultIs = 'TSession') {
        let _Session;
        if (defaultIs === 'TSession') { _Session = TSession.setSessionValues({ one: 1, two: 2, three: 3 }) }
        else { _Session = PSession.setSessionValues({ one: 1, two: 2, three: 3 }) }
        if (_Session) Logger.log(Test_Constants().TEST_TITLES.setSessionValues)
    },
    removeSessionValue(defaultIs = 'TSession') {
        let _Session;
        if (defaultIs === 'TSession') { _Session = TSession.removeSessionValue('one') }
        else { _Session = PSession.removeSessionValue('one') }
        if (_Session) Logger.log(Test_Constants().TEST_TITLES.removeSessionValue)
    },
    deleteSession(defaultIs = 'TSession') {
        let _Session;
        if (defaultIs === 'TSession') { _Session = TSession.deleteSession() }
        else { _Session = PSession.deleteSession() }
        if (_Session) Logger.log(Test_Constants().TEST_TITLES.deleteSession)
    },

}

