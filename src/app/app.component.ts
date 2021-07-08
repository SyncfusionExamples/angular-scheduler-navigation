import { Component, ViewChild } from "@angular/core";
import { extend } from "@syncfusion/ej2-base";
import { EventSettingsModel, DayService, ViewHelper, ScheduleComponent, View, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService } from "@syncfusion/ej2-angular-schedule";
import { scheduleData } from "../../dataSource"

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService]
})
export class AppComponent {

  @ViewChild("scheduleObj", { static: false })
  public scheduleObj: ScheduleComponent;
  public selectedDate: Date = new Date(2019, 0, 10);
  public eventSettings: EventSettingsModel = {
    dataSource: scheduleData
  };
  public showHeaderBar: boolean = false;
  public scheduleView: View = "Week";

  public datas: string[] = ["Day", "Week", "WorkWeek", "Month"];

  clickNext(): void {
    let currentView: View = this.scheduleObj.currentView;
    if (currentView === "Month") {
      this.scheduleObj.selectedDate = new Date(
        this.scheduleObj.selectedDate.setMonth(
          this.scheduleObj.selectedDate.getMonth() + 1
        )
      );
    } else {
      this.scheduleObj.selectedDate = new Date(
        this.scheduleObj.selectedDate.setDate(
          this.scheduleObj.selectedDate.getDate() +
          this.scheduleObj.activeView.renderDates.length
        )
      );
    }
  }

  clickPrev(): void {
    let currentView: View = this.scheduleObj.currentView;
    if (currentView === "Month") {
      this.scheduleObj.selectedDate = new Date(
        this.scheduleObj.selectedDate.setMonth(
          this.scheduleObj.selectedDate.getMonth() - 1
        )
      );
    } else {
      this.scheduleObj.selectedDate = new Date(
        this.scheduleObj.selectedDate.setDate(
          this.scheduleObj.selectedDate.getDate() -
          this.scheduleObj.activeView.renderDates.length
        )
      );
    }
  }
}