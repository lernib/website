/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const StudentsController = () => import('#controllers/students_controller')
const EventsController = () => import('#controllers/events_controller')

router.get('/students', [StudentsController, 'index'])
router.get('/student/:id', [StudentsController, 'show'])
router.delete('/student/:id', [StudentsController, 'destroy'])
router.patch('/student/:id', [StudentsController, 'update'])
router.post('/student', [StudentsController, 'store'])

router.get('/events', [EventsController, 'index'])
router.get('/event/:id', [EventsController, 'show'])
router.delete('/event/:id', [EventsController, 'destroy'])
router.patch('/event/:id', [EventsController, 'update'])
router.post('/event', [EventsController, 'store'])
