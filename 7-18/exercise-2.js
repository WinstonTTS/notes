var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}
	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

course.name // 'JavaScript Applications'
course.teachers[1] // 'Shane'
course.students[0].name // 'Steve'
course.students[1].computer.type // 'macbook'
course.preReqs.equipment
course.preReqs.equipment.OSOptions[1]
course.preReqs.equipment.OSOptions.join(' or ') // ['linux', 'osx']
const studentsWithOSX = course.students.filter(function(student) {
  return student.computer.OS === 'OSX'
})
