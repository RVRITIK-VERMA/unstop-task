import { Component, HostListener, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  // Variables used
  showGraph: boolean = false;
  isMobileView: boolean = false;
  selectedItem: String = "My Assessments"
  isSidePanelOpen: boolean = false;
  display = "none";
  createAssessment!: UntypedFormGroup
  formSubmitted: boolean = false;
  isMyAssessmentsSelected: boolean = false;
  selectedSkills: string[] = [];

  // Array storing the created assessments - by default storing 4
  assessmentObj: any = [
    {
      assess_icon: 'assets/icons/asess_icon.png',
      assess_name: 'Math Assessment',
      assess_type: 'Job',
      assess_date: '26 Aug 2023',
      assess_duration: '1.50',
      assess_question: "00"
    },
    {
      assess_icon: 'assets/icons/asess_icon.png',
      assess_name: 'Physics Assessment',
      assess_type: 'Job',
      assess_date: '26 Aug 2023',
      assess_duration: '1.50',
      assess_question: "00"
    },
    {
      assess_icon: 'assets/icons/asess_icon.png',
      assess_name: 'English Assessment',
      assess_type: 'Job',
      assess_date: '26 Aug 2023',
      assess_duration: '1.50',
      assess_question: "00"
    },
  ]

  constructor(
    private formbuilder: UntypedFormBuilder,) {

  }

  ngOnInit() {
    // creating formGroup
    this.initializeForm()

    // console.log(this.assessmentObj.length)

    //checking if the current view is mobile view or not
    this.checkMobileView();
  }

  showHideSidePanel() {
    this.isSidePanelOpen = !this.isSidePanelOpen;
  }

  selectItem(value: String) {
    this.selectedItem = value
  }

  ToggleGraph() {
    this.showGraph = !this.showGraph;
  }

  toggleView() { }

  
  checkMobileView() {
    if (window.innerWidth <= 768) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }

  //Adding resize event using hostListner to dynamically call the checkmobile view function when window resizes
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkMobileView();
  }

  openModal() {
    this.display = "block";
  }

  //on close of modal we reset the form and skill-selected array for new entries
  closemodal() {
    this.display = "none";
    this.createAssessment.reset();
    this.formSubmitted = false;
    this.selectedSkills.length = 0;
  }

  //initializing form - as of now only assessment name is required field
  initializeForm() {
    this.createAssessment = this.formbuilder.group({
      'assessmentName': ['', Validators.required],
      'testDescription': [''],
      'testSkills': [''],
      'testDuration': [''],
      'testPurpose': ['']
    })
  }

  //changing current date formate as per requirement
  getCurrentFormattedDate() {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;
    return formattedDate;
  }

  //When entered duration in proper format i.e HH:MM:SS function is used to convert the assesment time in hours
  //If format is not correct "NaN" is returned 
  convertDurationToHours(duration: string) {
    const [hours, minutes, seconds] = duration.split(":").map(Number);
    const totalHours = hours + minutes / 60 + seconds / 3600;
    return totalHours.toFixed(2);
  }

  //On submitting form
  CreateAssessmentForm() {
    this.formSubmitted = true;
    if (this.createAssessment.valid) {
      let data = this.createAssessment.value;

      //creating a local obj to manipulate form values
      let assessObj = {
        assess_icon: "assets/icons/asess_icon.png",
        assess_name: data.assessmentName ? data.assessmentName : "Test Assessment",
        assess_type: "Job",
        assess_date: this.getCurrentFormattedDate(),
        assess_duration: this.convertDurationToHours(data.testDuration.toString()).toString(),
        assess_question: "00"
      }
      // console.log(assessObj);

      //adding the created object to array
      this.assessmentObj.push(assessObj);

      // closing modal
      this.closemodal();
    }
  }

  //adding the entered skills in the skills-selected array
  addSkill(event:Event) {
    if(!this.isMobileView){
      event.preventDefault();
    }
    const skill = this.createAssessment.controls['testSkills'].value;
    if (skill && !this.selectedSkills.includes(skill)) {
      this.selectedSkills.push(skill);
      this.createAssessment.controls['testSkills'].setValue('');
    }
  }

  // removing the particular skill from skills-selected array
  removeSkill(skill: string) {
    const index = this.selectedSkills.indexOf(skill);
    if (index !== -1) {
      this.selectedSkills.splice(index, 1);
    }
  }
}

