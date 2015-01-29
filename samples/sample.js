var manager = require('../src/servers-manager')(
// Проект "test"
    {
    // Имя проекта
        "name": 'test',
        
    // Node сервера
        "node": {
        // Репозиторий
            "repository": 'https://github.com/classtype/test.git',
            
        // Список серверов
            "servers": [
                {
                    "IP": '109.234.154.74',// Адрес сервера
                    "login": 'root',// Имя пользователя
                    "password": 'dYkHDh8b'// Пароль пользователя
                }
            ]
        }
    }
);