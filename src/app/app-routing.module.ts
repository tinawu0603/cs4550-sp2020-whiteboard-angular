import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { HomeComponent } from './home/home.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'courses', component: CourseListComponent },
    { path: 'course/:cid', component: CourseViewerComponent },
    { path: 'course/:cid/module/:mid', component: CourseViewerComponent },
    { path: 'course/:cid/module/:mid/lesson/:lid', component: CourseViewerComponent },
    { path: 'course/:cid/quizzes', component: QuizzesComponent },
    { path: 'course/:cid/quizzes/:qid', component: QuizComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }