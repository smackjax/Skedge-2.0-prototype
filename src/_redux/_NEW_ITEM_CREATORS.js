import uniqid from 'uniqid';
// New object templates

export const createNewMemberObj = (newName)=>{
    const newMember = { 
        name: newName,
        groups: [],
        unavailableDates: [],
        timesAssigned: 0,
        id: uniqid('m-')
    };
    return newMember;
}

export const createNewGroupObj = (newName)=>{
    const newGroup = {
        name: newName,
        members: [],
        id: uniqid('g-')
    }
    return newGroup;
}

export const createNewTaskObj = (newName)=>{
     
     const newTask = {
         name: newName,
         groups: [],
         numNeeded: 1,
         isExclusive: false,
         timesAssigned: {},
         id: uniqid('t-')
     }
    return newTask;
}