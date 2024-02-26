/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import StudentsController from '#controllers/students_controller'

router.get('/students', [StudentsController, 'index'])

router.get('/student/:id', [StudentsController, 'show'])
router.delete('/student/:id', [StudentsController, 'destroy'])
router.patch('/student/:id', [StudentsController, 'update'])
router.post('/student', [StudentsController, 'store'])
