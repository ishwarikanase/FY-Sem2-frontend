import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupsComponent } from './groups/groups.component';
import { FriendsComponent } from './friends/friends.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ActivityComponent } from './activity/activity.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddExpenseComponent } from './modals/add-expense/add-expense.component';
import { SettleUpComponent } from './modals/settle-up/settle-up.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LogInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    GroupsComponent,
    FriendsComponent,
    MainDashboardComponent,
    ActivityComponent,
    ExpensesComponent,
    AddExpenseComponent,
    SettleUpComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    CalendarModule,
    DynamicDialogModule,
    ChipsModule,
    ReactiveFormsModule,
    MenubarModule,
    HttpClientModule,
    AutoCompleteModule,
    CheckboxModule,
    FormsModule,
    ToastModule,

  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddExpenseComponent,
    SettleUpComponent
  ]
})
export class AppModule { }
