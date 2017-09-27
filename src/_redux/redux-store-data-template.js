
// TODO reduce total times assigned to both specific and general tasks to lowest difference after sched gen, before redux tasks update
export default  {
    
    ui: {
        slideOverlayOpen: false,
        selectedIds: [],
        slideOptsType: '',
        schedViewType: 'default'
    },

    schedData: {
        // Schedule returned to users looking at sched  
        activeSchedId: 'schedId1',
        // Changed when generating new schedule
        generating: false, 
        errorMsg: '',
        allScheds: {}
    },

    membersById: {
        membId1: {
            id: 'membId1',
            name: 'Maxwell Bernard',
            // Date strings by dehydrated date format
            unavailableDates: [],
            // Times assigned gets added to 
            totalTimesAssigned: 4,
            groups: ['groupId1']    
        },
        membId2: {
            id: 'membId2',
            name: 'Livvy Bivvy',
             // Date strings by dehydrated date format
             unavailableDates: [],
            totalTimesAssigned: 0,
            groups: ['groupId1','groupId2']  
        },
        membId3: {
            id: 'membId3',
            name: 'Teri Bernard',
             // Date strings by dehydrated date format
             unavailableDates: [],
            totalTimesAssigned: 6,
            groups: ['groupId1']  
        }
    
    },
    groupsById: {
        groupId1: {
            id: 'groupId1',
            name: 'Cannoneers',
            members: ['membId1','membId2','membId3' ],      
        },
        groupId2: {
            id: 'groupId2',
            name: 'Crewmen',
            members: ['membId3']  
        },
        groupId3: {
            id: 'groupId3',
            name: 'Captains',
            members: ['membId2']  
        },
    },
    tasksById: {
        taskId1: {
            id: 'taskId1',
            name: "Cannon swabber",
            groups: ['groupId1'],
            // Whether a member assigned here can be assigned to another task on the same day
            isExclusive: false, 
            // How many members need to be assigned TODO in gui
            numNeeded: 1,
            // Holds amount of times membId has been assigned to task
            timesAssigned : {
                'membId2': 1,
            }
        },
        taskId2: {
            id: 'taskId2',
            name: "Man the wheel",
            groups: ['groupId1', 'groupId2'],
            numNeeded: 1,
            isExclusive: false,
            timesAssigned : {
                'membId1': 0,
                'membId2': 0,
                'membId3': 0
            }
        },
        taskId3: {
            id: 'taskId3',
            name: "Hoist sail",
            groups: ['groupId2', 'groupId3'],
            numNeeded: 2,
            isExclusive: false,
            timesAssigned : {
                'membId1': 0,
                'membId4': 0,
                'membId3': 0
            }
        },
        taskId4: {
            id: 'taskId4',
            name: "Remove barnacles",
            groups: [],
            numNeeded: 1,
            isExclusive: false,
            timesAssigned : {
                'membId3' : 0
            }
        }
    },
    daysOfWeek: {
        '0' : {
            id: '0',
            name: 'Sunday',
            tasks: ['taskId1', 'taskId2', 'taskId4']
        },
        '1' : {
            id: '1',
            name: 'Monday',
            tasks: ['taskId1', 'taskId4']
        },
        '2' : {
            id: '2',
            name: 'Tuesday',
            tasks: ['taskId1', 'taskId3']
        },
        '3' : {
            id: '3',
            name: 'Wednesday',
            tasks: ['taskId2']
        },
        '4' : {
            id: '4',
            name: 'Thursday',
            tasks: ['taskId1']
        },
        '5' : {
            id: '5',
            name: 'Friday',
            tasks: ['taskId1', 'taskId3', 'taskId4']
        },
        '6' : {
            id: '6',
            name: 'Saturday',
            tasks: ['taskId1', 'taskId4']
        }
    }


}
