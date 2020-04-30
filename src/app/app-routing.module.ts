import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { NotAuthGuardGuard } from './guards/not-auth-guard.guard';
import { FriendsComponent } from './friends/friends.component';
import { GroupsComponent } from './groups/groups.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ActivityComponent } from './activity/activity.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ProfileComponent } from './profile/profile.component';
import { AddExpenseComponent } from './modals/add-expense/add-expense.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [NotAuthGuardGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [NotAuthGuardGuard] },
  { path: 'login', component: LogInComponent, canActivate: [NotAuthGuardGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardGuard], children: [
      { path: '', component: MainDashboardComponent },
      { path: 'recent', component: ActivityComponent },
      { path: 'expenses', component: ExpensesComponent },
    ]
  },
  { path: 'friends', component: FriendsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'addExpense', component: AddExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
