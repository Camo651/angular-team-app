import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMember = '';
  members: string[] = [];
  errorMessage = '';
  teams = 0;
  actualTeams: string[][] = [];

  addMember() {
    if(!this.newMember) {
      this.errorMessage = 'Please enter a name';
      return;
    }
    if(this.members.includes(this.newMember)) {
      this.errorMessage = 'This name is already in the list';
    this.newMember = '';
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMember);
    this.newMember = '';
  }

  onInput(member: string) {
    this.newMember = member;
  }

  changeTeamCount(_teams: string){
    this.teams = parseInt(_teams);
    if(this.teams < 0) {
      this.errorMessage = 'Please enter a positive number';
      return;
    }
    this.errorMessage = '';
  }

  generateTeams() {
    if(this.teams === 0) {
      this.errorMessage = 'Please enter a number of teams';
      return;
    }
    if(this.members.length < this.teams) {
      this.errorMessage = 'There are not enough members for the number of teams';
      return;
    }
    this.errorMessage = '';
    let teams = [];
    for(let i = 0; i < this.teams; i++) {
      let team: string[] = [];
      teams.push(team);
    }
    let membersPerTeam = Math.floor(this.members.length / this.teams);
    let remainingMembers = this.members.length % this.teams;
    let memberIndex = 0;
    for(let i = 0; i < this.teams; i++) {
      for(let j = 0; j < membersPerTeam; j++) {
        teams[i].push(this.members[memberIndex]);
        memberIndex++;
      }
    }
    for(let i = 0; i < remainingMembers; i++) {
      teams[i].push(this.members[memberIndex]);
      memberIndex++;
    }
    this.actualTeams = teams;
  }
}
