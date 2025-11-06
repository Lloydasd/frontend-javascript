namespace Subjects {
  export interface Teacher{
    experienceTeachingReact?: number
  };

  class React extends Subject{
    getRequirements(){
      return 'Here is the list of requirements for React'
    }

    getAvailableTeacher(){
      if(this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingReact > 0){
        return `Available Teacher: ${this.teacher.firstName}`
      }else {
        return 'No available teacher '
      }
    }
  }
}