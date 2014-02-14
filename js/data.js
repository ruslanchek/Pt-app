var data_source = {
	elements: [
		{period: 1, row: 1, group: 1, 	id: 1, 		number: 1, 		width: 1, sub: 'A', 	name: 'H', 		title: 'Водород', 	mass: 1.00795, 	type: 's', electrons: [1]},
		{period: 1, row: 1, group: 2, 	id: 2, 		spacer: true, 	width: 1},
		{period: 1, row: 1, group: 3, 	id: 3, 		spacer: true, 	width: 1},
		{period: 1, row: 1, group: 4, 	id: 4, 		spacer: true, 	width: 1},
		{period: 1, row: 1, group: 5, 	id: 5, 		spacer: true, 	width: 1},
		{period: 1, row: 1, group: 6, 	id: 6, 		spacer: true, 	width: 1},
		{period: 1, row: 1, group: 7, 	id: 7, 		spacer: true, 	width: 1},
		{period: 1, row: 1, group: 8, 	id: 8, 		spacer: true, 	width: 1},
		{period: 1, row: 1, group: 8, 	id: 9, 		spacer: true, 	width: 1},
		{period: 1, row: 1, group: 8, 	id: 10, 	spacer: true, 	width: 1},
		{period: 1, row: 1, group: 8, 	id: 11, 	number: 2, 		width: 1, sub: 'A', 	name: 'He', 	title: 'Гелий', 	mass: 4.002602,	type: 's', electrons: [2]},
		
		{period: 2, row: 2, group: 1, 	id: 12, 	number: 3, 		width: 1, sub: 'A', 	name: 'Li', 	title: 'Литий', 	mass: 6.9412, 	type: 's', electrons: [2,1]},
		{period: 2, row: 2, group: 2, 	id: 13, 	number: 4, 		width: 1, sub: 'A', 	name: 'Be', 	title: 'Берилий', 	mass: 9.01218, 	type: 's', electrons: [2,2]},
		{period: 2, row: 2, group: 3, 	id: 14, 	number: 5, 		width: 1, sub: 'A', 	name: 'B', 		title: 'Бор', 		mass: 10.812, 	type: 'p', electrons: [2,3]},
		{period: 2, row: 2, group: 4, 	id: 15, 	number: 6, 		width: 1, sub: 'A', 	name: 'C', 		title: 'Углерод', 	mass: 12.0108, 	type: 'p', electrons: [2,4]},
		{period: 2, row: 2, group: 5, 	id: 16, 	number: 7, 		width: 1, sub: 'A', 	name: 'N', 		title: 'Азот', 		mass: 14.0067, 	type: 'p', electrons: [2,5]},
		{period: 2, row: 2, group: 6, 	id: 16, 	number: 8, 		width: 1, sub: 'A', 	name: 'O', 		title: 'Кислород', 	mass: 15.9994, 	type: 'p', electrons: [2,6]},
		{period: 2, row: 2, group: 7, 	id: 17, 	number: 9, 		width: 1, sub: 'A', 	name: 'F', 		title: 'Фтор', 		mass: 18.99840, type: 'p', electrons: [2,7]},
		{period: 2, row: 2, group: 8, 	id: 18, 	spacer: true, 	width: 1},
		{period: 2, row: 2, group: 8, 	id: 19, 	spacer: true, 	width: 1},
		{period: 2, row: 2, group: 8, 	id: 20, 	spacer: true, 	width: 1},
		{period: 2, row: 2, group: 8, 	id: 21, 	number: 10, 	width: 1, sub: 'A', 	name: 'Ne', 	title: 'Неон', 		mass: 20.179, 	type: 'p', electrons: [2,8]},

		{period: 3, row: 3, group: 1, 	id: 22, 	number: 11, 	width: 1, sub: 'A', 	name: 'Na', 	title: 'Натрий', 	mass: 22.98977, type: 's', electrons: [2,8,1]},
		{period: 3, row: 3, group: 2, 	id: 23, 	number: 12, 	width: 1, sub: 'A', 	name: 'Mg', 	title: 'Магний', 	mass: 24.305, 	type: 's', electrons: [2,8,2]},
		{period: 3, row: 3, group: 3, 	id: 24, 	number: 13, 	width: 1, sub: 'A', 	name: 'Al', 	title: 'Алюминий', 	mass: 26.98154, type: 'p', electrons: [2,8,3]},
		{period: 3, row: 3, group: 4, 	id: 25, 	number: 14, 	width: 1, sub: 'A', 	name: 'Si', 	title: 'Кремний', 	mass: 28.0855, 	type: 'p', electrons: [2,8,4]},
		{period: 3, row: 3, group: 5, 	id: 26, 	number: 15, 	width: 1, sub: 'A', 	name: 'P', 		title: 'Фосфор', 	mass: 30.97376, type: 'p', electrons: [2,8,5]},
		{period: 3, row: 3, group: 6, 	id: 27, 	number: 16, 	width: 1, sub: 'A', 	name: 'S', 		title: 'Сера', 		mass: 32.066, 	type: 'p', electrons: [2,8,6]},
		{period: 3, row: 3, group: 7, 	id: 28, 	number: 17, 	width: 1, sub: 'A', 	name: 'Cl', 	title: 'Хлор', 		mass: 35.453, 	type: 'p', electrons: [2,8,7]},
		{period: 3, row: 3, group: 8, 	id: 29, 	spacer: true, 	width: 1},
		{period: 3, row: 3, group: 8, 	id: 30, 	spacer: true, 	width: 1},
		{period: 3, row: 3, group: 8, 	id: 31, 	spacer: true, 	width: 1},
		{period: 3, row: 3, group: 8, 	id: 32, 	number: 18, 	width: 1, sub: 'A', 	name: 'Ar', 	title: 'Аргон', 	mass: 39.948, 	type: 'p', electrons: [2,8,8]},
		
		{period: 4, row: 4, group: 1, 	id: 33, 	number: 19, 	width: 1, sub: 'A', 	name: 'K', 		title: 'Калий', 	mass: 39.0983, 	type: 's', electrons: [2,8,8,1]},
		{period: 4, row: 4, group: 2, 	id: 34, 	number: 20, 	width: 1, sub: 'A', 	name: 'Ca', 	title: 'Кальций', 	mass: 40.078, 	type: 's', electrons: [2,8,8,2]},
		{period: 4, row: 4, group: 3, 	id: 35, 	number: 21, 	width: 1, sub: 'B', 	name: 'Sc', 	title: 'Скандий', 	mass: 44.95591, type: 'd', electrons: [2,8,9,2]},
		{period: 4, row: 4, group: 4, 	id: 36, 	number: 22, 	width: 1, sub: 'B', 	name: 'Ti', 	title: 'Титан', 	mass: 47.88, 	type: 'd', electrons: [2,8,10,2]},
		{period: 4, row: 4, group: 5, 	id: 37, 	number: 23, 	width: 1, sub: 'B', 	name: 'V', 		title: 'Ванадий', 	mass: 50.9415, 	type: 'd', electrons: [2,8,11,2]},
		{period: 4, row: 4, group: 6, 	id: 38, 	number: 24, 	width: 1, sub: 'B', 	name: 'Cr', 	title: 'Хром', 		mass: 51.9961, 	type: 'd', electrons: [2,8,13,1]},
		{period: 4, row: 4, group: 7, 	id: 39, 	number: 25, 	width: 1, sub: 'B', 	name: 'Mn', 	title: 'Марганец', 	mass: 54.9380, 	type: 'd', electrons: [2,8,13,2]},
		{period: 4, row: 4, group: 8, 	id: 40, 	number: 26, 	width: 1, sub: 'B', 	name: 'Fe', 	title: 'Железо', 	mass: 55.847, 	type: 'd', electrons: [2,8,14,2]},
		{period: 4, row: 4, group: 8, 	id: 41, 	number: 27, 	width: 1, sub: 'B', 	name: 'Co', 	title: 'Кобальт', 	mass: 58.9332, 	type: 'd', electrons: [2,8,15,2]},
		{period: 4, row: 4, group: 8, 	id: 42, 	number: 28, 	width: 1, sub: 'B', 	name: 'Ni', 	title: 'Никель', 	mass: 58.69, 	type: 'd', electrons: [2,8,16,2]},
		{period: 4, row: 4, group: 8, 	id: 43, 	spacer: true, 	width: 1},
		
		{period: 4, row: 5, group: 1, 	id: 44, 	number: 29, 	width: 1, sub: 'B', 	name: 'Cu', 	title: 'Медь', 		mass: 63.546, 	type: 'd', electrons: [2,8,18,1]},
		{period: 4, row: 5, group: 2, 	id: 45, 	number: 30, 	width: 1, sub: 'B', 	name: 'Zn', 	title: 'Цинк', 		mass: 65.39, 	type: 'd', electrons: [2,8,18,2]},
		{period: 4, row: 5, group: 3, 	id: 46, 	number: 31, 	width: 1, sub: 'A', 	name: 'Ga', 	title: 'Галлий', 	mass: 69.723, 	type: 'p', electrons: [2,8,18,3]},
		{period: 4, row: 5, group: 4, 	id: 47, 	number: 32, 	width: 1, sub: 'A', 	name: 'Ge', 	title: 'Германий', 	mass: 72.59, 	type: 'p', electrons: [2,8,18,4]},
		{period: 4, row: 5, group: 5, 	id: 48, 	number: 33, 	width: 1, sub: 'A', 	name: 'As', 	title: 'Мышьяк', 	mass: 74.9216, 	type: 'p', electrons: [2,8,18,5]},
		{period: 4, row: 5, group: 6, 	id: 49, 	number: 34, 	width: 1, sub: 'A', 	name: 'Se', 	title: 'Селен', 	mass: 78.96, 	type: 'p', electrons: [2,8,18,6]},
		{period: 4, row: 5, group: 7, 	id: 50, 	number: 35, 	width: 1, sub: 'A', 	name: 'Br', 	title: 'Бром', 		mass: 79.904, 	type: 'p', electrons: [2,8,18,7]},
		{period: 4, row: 5, group: 8, 	id: 51, 	spacer: true, 	width: 1},
		{period: 4, row: 5, group: 8, 	id: 52, 	spacer: true, 	width: 1},
		{period: 4, row: 5, group: 8, 	id: 53, 	spacer: true, 	width: 1},
		{period: 4, row: 5, group: 8, 	id: 54, 	number: 36, 	width: 1, sub: 'A', 	name: 'Kr', 	title: 'Криптон', 	mass: 83.80, 	type: 'p', electrons: [2,8,18,8]},
		
		{period: 5, row: 6, group: 1, 	id: 55, 	number: 37, 	width: 1, sub: 'A', 	name: 'Rb', 	title: 'Рубидий', 	mass: 85.4678, 	type: 's', electrons: [2,8,18,8,1]},
		{period: 5, row: 6, group: 2, 	id: 56, 	number: 38, 	width: 1, sub: 'A', 	name: 'Sr', 	title: 'Стронций', 	mass: 87.62, 	type: 's', electrons: []},
		{period: 5, row: 6, group: 3, 	id: 57, 	number: 39, 	width: 1, sub: 'B', 	name: 'Y', 		title: 'Иттрий', 	mass: 88.9059, 	type: 'd', electrons: []},
		{period: 5, row: 6, group: 4, 	id: 58, 	number: 40, 	width: 1, sub: 'B', 	name: 'Zr', 	title: 'Цирконий', 	mass: 91.224, 	type: 'd', electrons: []},
		{period: 5, row: 6, group: 5, 	id: 59, 	number: 41, 	width: 1, sub: 'B', 	name: 'Nb', 	title: 'Ниобий', 	mass: 92.9064, 	type: 'd', electrons: []},
		{period: 5, row: 6, group: 6, 	id: 60, 	number: 42, 	width: 1, sub: 'B', 	name: 'Mo', 	title: 'Молибден', 	mass: 95.94, 	type: 'd', electrons: []},
		{period: 5, row: 6, group: 7, 	id: 61, 	number: 43, 	width: 1, sub: 'B', 	name: 'Tc', 	title: 'Технеций', 	mass: 97.9072, 	type: 'd', electrons: []},
		{period: 5, row: 6, group: 8, 	id: 62, 	number: 44, 	width: 1, sub: 'B', 	name: 'Ru', 	title: 'Рутений', 	mass: 101.07, 	type: 'd', electrons: []},
		{period: 5, row: 6, group: 8, 	id: 63, 	number: 45, 	width: 1, sub: 'B', 	name: 'Rh', 	title: 'Родий', 	mass: 102.9055, type: 'd', electrons: []},
		{period: 5, row: 6, group: 8, 	id: 64, 	number: 46, 	width: 1, sub: 'B', 	name: 'Pd', 	title: 'Палладий', 	mass: 106.42, 	type: 'd', electrons: []},
		{period: 5, row: 6, group: 8, 	id: 65, 	spacer: true, 	width: 1},
		
		{period: 5, row: 7, group: 1, 	id: 66, 	number: 47, 	width: 1, sub: 'B', 	name: 'Ag', 	title: 'Серебро', 	mass: 107.8682, type: 'd', electrons: []},
		{period: 5, row: 7, group: 2, 	id: 67, 	number: 48, 	width: 1, sub: 'B', 	name: 'Cd', 	title: 'Кадмий', 	mass: 112.41, 	type: 'd', electrons: []},
		{period: 5, row: 7, group: 3, 	id: 68, 	number: 49, 	width: 1, sub: 'A', 	name: 'In', 	title: 'Индий', 	mass: 114.818, 	type: 'p', electrons: []},
		{period: 5, row: 7, group: 4, 	id: 69, 	number: 50, 	width: 1, sub: 'A', 	name: 'Sn', 	title: 'Олово', 	mass: 118.71, 	type: 'p', electrons: []},
		{period: 5, row: 7, group: 5, 	id: 70, 	number: 51, 	width: 1, sub: 'A', 	name: 'Sb', 	title: 'Сурьма', 	mass: 121.760, 	type: 'p', electrons: []},
		{period: 5, row: 7, group: 6, 	id: 71, 	number: 52, 	width: 1, sub: 'A', 	name: 'Te', 	title: 'Теллур', 	mass: 127.60, 	type: 'p', electrons: []},
		{period: 5, row: 7, group: 7, 	id: 72, 	number: 53, 	width: 1, sub: 'A', 	name: 'I', 		title: 'Йод', 		mass: 126.9045, type: 'p', electrons: []},
		{period: 5, row: 7, group: 8, 	id: 73, 	spacer: true, 	width: 1},
		{period: 5, row: 7, group: 8, 	id: 74, 	spacer: true, 	width: 1},
		{period: 5, row: 7, group: 8, 	id: 75, 	spacer: true, 	width: 1},
		{period: 5, row: 7, group: 8, 	id: 76, 	number: 54, 	width: 1, sub: 'A', 	name: 'Xe', 	title: 'Ксенон', 	mass: 131.29, 	type: 'p', electrons: []},
		
		{period: 6, row: 8, group: 1, 	id: 77, 	number: 55, 	width: 1, sub: 'A', 	name: 'Cs', 	title: 'Цезий', 	mass: 132.9054, type: 's', electrons: []},
		{period: 6, row: 8, group: 2, 	id: 78, 	number: 56, 	width: 1, sub: 'A', 	name: 'Ba', 	title: 'Барий', 	mass: 137.327, 	type: 's', electrons: []},
		{period: 6, row: 8, group: 3, 	id: 79, 	number: '57&ndash;71', width: 1, sub: 'B', link: true, name: 'La&mdash;Lu', title: 'Лантаноиды', type: 'fl'},
		{period: 6, row: 8, group: 4, 	id: 80, 	number: 72, 	width: 1, sub: 'B', 	name: 'Hf', 	title: 'Гафний', 	mass: 178.49, 	type: 'd', electrons: []},
		{period: 6, row: 8, group: 4, 	id: 80, 	number: 73, 	width: 1, sub: 'B', 	name: 'Ta', 	title: 'Тантал', 	mass: 180.9479, type: 'd', electrons: []},
		{period: 6, row: 8, group: 5, 	id: 81, 	number: 74, 	width: 1, sub: 'B', 	name: 'W', 		title: 'Вольфрам', 	mass: 183.84, 	type: 'd', electrons: []},
		{period: 6, row: 8, group: 6, 	id: 82, 	number: 75, 	width: 1, sub: 'B', 	name: 'Re', 	title: 'Рений', 	mass: 186.207, 	type: 'd', electrons: []},
		{period: 6, row: 8, group: 7, 	id: 83, 	number: 76, 	width: 1, sub: 'B', 	name: 'Os', 	title: 'Осмий', 	mass: 190.23, 	type: 'd', electrons: []},
		{period: 6, row: 8, group: 8, 	id: 84, 	number: 77, 	width: 1, sub: 'B', 	name: 'Ir', 	title: 'Иридий', 	mass: 192.217, 	type: 'd', electrons: []},
		{period: 6, row: 8, group: 8, 	id: 85, 	number: 78, 	width: 1, sub: 'B', 	name: 'Pt', 	title: 'Платина', 	mass: 195.085, 	type: 'd', electrons: []},
		{period: 6, row: 8, group: 8, 	id: 87, 	spacer: true, 	width: 1},
		
		{period: 6, row: 9, group: 1, 	id: 89, 	number: 79, 	width: 1, sub: 'B', 	name: 'Au', 	title: 'Золото', 	mass: 196.96657,type: 'd', electrons: []},
		{period: 6, row: 9, group: 2, 	id: 90, 	number: 80, 	width: 1, sub: 'B', 	name: 'Hg', 	title: 'Ртуть', 	mass: 200.59, 	type: 'd', electrons: []},
		{period: 6, row: 9, group: 3, 	id: 91, 	number: 81, 	width: 1, sub: 'A', 	name: 'Tl', 	title: 'Таллий', 	mass: 204.3833, type: 'p', electrons: []},
		{period: 6, row: 9, group: 4, 	id: 92, 	number: 82, 	width: 1, sub: 'A', 	name: 'Pb', 	title: 'Свинец', 	mass: 207.2, 	type: 'p', electrons: []},
		{period: 6, row: 9, group: 5, 	id: 93, 	number: 83, 	width: 1, sub: 'A', 	name: 'Bi', 	title: 'Висмут', 	mass: 208.9804, type: 'p', electrons: []},
		{period: 6, row: 9, group: 6, 	id: 94, 	number: 84, 	width: 1, sub: 'A', 	name: 'Po', 	title: 'Полоний', 	mass: 209, 		type: 'p', isotope_mass: true, electrons: []},
		{period: 6, row: 9, group: 7, 	id: 95, 	number: 85, 	width: 1, sub: 'A', 	name: 'At', 	title: 'Астат', 	mass: 210, 		type: 'p', isotope_mass: true, electrons: []},
		{period: 6, row: 9, group: 8, 	id: 96, 	spacer: true, 	width: 1},
		{period: 6, row: 9, group: 8, 	id: 97, 	spacer: true, 	width: 1},
		{period: 6, row: 9, group: 8, 	id: 98, 	spacer: true, 	width: 1},
		{period: 6, row: 9, group: 8, 	id: 99, 	number: 86, 	width: 1, sub: 'A', 	name: 'Rn', 	title: 'Радон', 	mass: 222, 		type: 'p', isotope_mass: true, electrons: []},
		
		{period: 7, row: 10, group: 1, 	id: 100, 	number: 87, 	width: 1, sub: 'A', 	name: 'Fr', 	title: 'Франций', 	mass: 223, 		type: 's', isotope_mass: true, electrons: []},
		{period: 7, row: 10, group: 2, 	id: 101, 	number: 88, 	width: 1, sub: 'A', 	name: 'Ra', 	title: 'Радий', 	mass: 226, 		type: 's', isotope_mass: true, electrons: []},
		{period: 7, row: 10, group: 3, 	id: 102, 	number: '89&ndash;103', width: 1, sub: 'B', name: 'Ac&mdash;Lr', title: 'Актиноиды', 		type: 'fa', link: true},
		{period: 7, row: 10, group: 4, 	id: 103, 	number: 104, 	width: 1, sub: 'B', 	name: 'Rf', 	title: 'Резерфордий', mass: 261, 		type: 'd', isotope_mass: true, electrons: []},
		{period: 7, row: 10, group: 4, 	id: 104, 	number: 105, 	width: 1, sub: 'B', 	name: 'Db', 	title: 'Дубний', 	mass: 268, 		type: 'd', isotope_mass: true, electrons: []},
		{period: 7, row: 10, group: 5, 	id: 105, 	number: 106, 	width: 1, sub: 'B', 	name: 'Sg', 	title: 'Сиборгий', 	mass: 271, 		type: 'd', isotope_mass: true, electrons: []},
		{period: 7, row: 10, group: 6, 	id: 106, 	number: 107, 	width: 1, sub: 'B', 	name: 'Bh', 	title: 'Борий', 	mass: 267, 		type: 'd', isotope_mass: true, electrons: []},
		{period: 7, row: 10, group: 7, 	id: 107, 	number: 108, 	width: 1, sub: 'B', 	name: 'Hs', 	title: 'Хассий', 	mass: 269, 		type: 'd', isotope_mass: true, electrons: []},
		{period: 7, row: 10, group: 8, 	id: 108, 	number: 109, 	width: 1, sub: 'B', 	name: 'Mt', 	title: 'Майтнерий',	mass: 267, 		type: 'd', isotope_mass: true, electrons: []},
		{period: 7, row: 10, group: 8, 	id: 109, 	number: 110, 	width: 1, sub: 'B', 	name: 'Ds', 	title: 'Дармштадтий',mass: 281, 	type: 'd', isotope_mass: true, compressed: true, electrons: []},
		{period: 7, row: 10, group: 8, 	id: 110, 	spacer: true, 	width: 1},
		
		{period: 7, row: 11, group: 1, 	id: 111, 	number: 111, 	width: 1, sub: 'B', 	name: 'Rg', 	title: 'Рентгений', mass: 272,		type: 'd', isotope_mass: true, electrons: []},
		{period: 7, row: 11, group: 2, 	id: 112, 	number: 112, 	width: 1, sub: 'B', 	name: 'Cn', 	title: 'Коперниций',mass: 285, 		type: 'd', isotope_mass: true, electrons: []},
		{period: 7, row: 11, group: 3, 	id: 113, 	number: 113, 	width: 1, sub: 'A', 	name: 'Uut', 	title: 'Унунтрий', 	mass: 284, 		type: 'p', isotope_mass: true, electrons: []},
		{period: 7, row: 11, group: 4, 	id: 114, 	number: 114, 	width: 1, sub: 'A', 	name: 'Fl', 	title: 'Флеровий', 	mass: 289, 		type: 'p', isotope_mass: true, electrons: []},
		{period: 7, row: 11, group: 5, 	id: 115, 	number: 115, 	width: 1, sub: 'A', 	name: 'Uup', 	title: 'Унунпентий',mass: 288, 		type: 'p', isotope_mass: true, electrons: []},
		{period: 7, row: 11, group: 6, 	id: 116, 	number: 116, 	width: 1, sub: 'A', 	name: 'Lv', 	title: 'Ливерморий',mass: 293, 		type: 'p', isotope_mass: true, electrons: []},
		{period: 7, row: 11, group: 7, 	id: 117, 	number: 117, 	width: 1, sub: 'A', 	name: 'Uus', 	title: 'Унунсептий',mass: 294, 		type: 'p', isotope_mass: true, electrons: []},
		{period: 7, row: 11, group: 8, 	id: 118, 	spacer: true, 	width: 1},
		{period: 7, row: 11, group: 8, 	id: 119, 	spacer: true, 	width: 1},
		{period: 7, row: 11, group: 8, 	id: 120, 	spacer: true, 	width: 1},
		{period: 7, row: 11, group: 8, 	id: 121, 	number: 118, 	width: 1, sub: 'A', 	name: 'Uuo', 	title: 'Унуноктий', mass: 294, 		type: 'p', isotope_mass: true, electrons: []},
		
		{period: 8, row: 12, group: 1, 	id: 122, 	number: 119, 	width: 1, sub: 'A', 	name: 'Uue', 	title: 'Унуненний', mass: 316, 		type: 's', isotope_mass: true, temporary: true, electrons: []},
		{period: 8, row: 12, group: 2, 	id: 123, 	number: 120, 	width: 1, sub: 'A', 	name: 'Ubn', 	title: 'Унбинилий', mass: 320, 		type: 's', isotope_mass: true, temporary: true, electrons: []},
		{period: 8, row: 12, group: 3, 	id: 124, 	number: '121&ndash;126', width: 1, sub: 'B', name: 'Ubu&mdash;Ubh', title: 'Суперакти&shy;ноиды', 	type: 'g', link: true, compressed: true, electrons: []},
		{period: 8, row: 12, group: 4, 	id: 125, 	spacer: true, 	width: 1},
		{period: 8, row: 12, group: 5, 	id: 126, 	spacer: true, 	width: 1},
		{period: 8, row: 12, group: 6, 	id: 127, 	spacer: true, 	width: 1},
		{period: 8, row: 12, group: 7, 	id: 128, 	spacer: true, 	width: 1},
		{period: 8, row: 12, group: 8, 	id: 129, 	spacer: true, 	width: 1},
		{period: 8, row: 12, group: 9, 	id: 130, 	spacer: true, 	width: 1},
		{period: 8, row: 12, group: 10, id: 131, 	spacer: true, 	width: 1},
		{period: 8, row: 12, group: 11, id: 132, 	spacer: true, 	width: 1},
	],
	
	lanthanides: [
		{id: 1, 	number: 57, 	name: 'La', 	title: 'Лантан', 		mass: 138.9055, 	type: 'fl'},
		{id: 2, 	number: 58, 	name: 'Ce', 	title: 'Церий', 		mass: 140.116, 		type: 'fl'},
		{id: 3, 	number: 59, 	name: 'Pr', 	title: 'Празеодим', 	mass: 140.9076, 	type: 'fl'},
		{id: 4, 	number: 60, 	name: 'Nd', 	title: 'Неодим', 		mass: 144.242, 		type: 'fl'},
		{id: 5, 	number: 61, 	name: 'Pm', 	title: 'Прометий', 		mass: 145, 			type: 'fl', isotope_mass: true},
		{id: 6, 	number: 62, 	name: 'Sm', 	title: 'Самарий', 		mass: 150.36, 		type: 'fl'},
		{id: 7, 	number: 63, 	name: 'Eu', 	title: 'Европий', 		mass: 151.964, 		type: 'fl'},
		{id: 8, 	number: 64, 	name: 'Gd', 	title: 'Гадолиний', 	mass: 157.25, 		type: 'fl'},
		{id: 9, 	number: 65, 	name: 'Tb', 	title: 'Тербий', 		mass: 158.9253, 	type: 'fl'},
		{id: 10, 	number: 66, 	name: 'Dy', 	title: 'Диспрозий', 	mass: 162.500, 		type: 'fl'},
		{id: 11, 	number: 67, 	name: 'Ho', 	title: 'Гольмий', 		mass: 164.9303, 	type: 'fl'},
		{id: 12, 	number: 68, 	name: 'Er', 	title: 'Эрбий', 		mass: 167.259, 		type: 'fl'},
		{id: 13, 	number: 69, 	name: 'Tm', 	title: 'Тулий', 		mass: 168.9342, 	type: 'fl'},
		{id: 14, 	number: 70, 	name: 'Yb', 	title: 'Иттербий', 		mass: 173.04, 		type: 'fl'},
		{id: 15, 	number: 71, 	name: 'Lu', 	title: 'Лютеций', 		mass: 174.967, 		type: 'fl'}
	],
	
	actinides: [
		{id: 1, 	number: 89, 	name: 'Ac', 	title: 'Актиний', 		mass: 227, 			type: 'fa', isotope_mass: true},
		{id: 2, 	number: 90, 	name: 'Th', 	title: 'Торий', 		mass: 232.038, 		type: 'fa'},
		{id: 3, 	number: 91, 	name: 'Pa', 	title: 'Протактиний',	mass: 231.0359, 	type: 'fa'},
		{id: 4, 	number: 92, 	name: 'U', 		title: 'Уран', 			mass: 238.0289, 	type: 'fa'},
		{id: 5, 	number: 93, 	name: 'Np', 	title: 'Нептуний', 		mass: 237, 			type: 'fa', isotope_mass: true},
		{id: 6, 	number: 94, 	name: 'Pu', 	title: 'Плутоний', 		mass: 244, 			type: 'fa', isotope_mass: true},
		{id: 7, 	number: 95, 	name: 'Am', 	title: 'Америций', 		mass: 243, 			type: 'fa', isotope_mass: true},
		{id: 8, 	number: 96, 	name: 'Cm', 	title: 'Кюрий', 		mass: 247, 			type: 'fa', isotope_mass: true},
		{id: 9, 	number: 97, 	name: 'Bk', 	title: 'Берклий', 		mass: 247, 			type: 'fa', isotope_mass: true},
		{id: 10, 	number: 98, 	name: 'Cf', 	title: 'Калифорний',	mass: 251, 			type: 'fa', isotope_mass: true},
		{id: 11, 	number: 99, 	name: 'Es', 	title: 'Эйнштейний',	mass: 252, 			type: 'fa', isotope_mass: true},
		{id: 12, 	number: 100, 	name: 'Fm', 	title: 'Фермий',		mass: 257, 			type: 'fa', isotope_mass: true},
		{id: 13, 	number: 101, 	name: 'Md', 	title: 'Менделевий',	mass: 258, 			type: 'fa', isotope_mass: true},
		{id: 14, 	number: 102, 	name: 'No', 	title: 'Нобелий', 		mass: 259, 			type: 'fa', isotope_mass: true},
		{id: 15, 	number: 103, 	name: 'Lr', 	title: 'Лоуренсий', 	mass: 262, 			type: 'fa', isotope_mass: true}
	],
	
	superactinides: [
		{id: 1, 	number: 121, 	name: 'Ubu', 	title: 'Унбиуний', 		mass: 320, 			type: 'g', isotope_mass: true},
		{id: 2, 	number: 122, 	name: 'Ubb', 	title: 'Унбибий', 		mass: 0, 			type: 'g', isotope_mass: true},
		{id: 3, 	number: 123, 	name: 'Ubt', 	title: 'Унбитрий', 		mass: 0, 			type: 'g', isotope_mass: true},
		{id: 4, 	number: 124, 	name: 'Ubq', 	title: 'Унбиквадий',	mass: 0, 			type: 'g', isotope_mass: true},
		{id: 5, 	number: 125, 	name: 'Ubp', 	title: 'Унбипентий',	mass: 0, 			type: 'g', isotope_mass: true},
		{id: 6, 	number: 126, 	name: 'Ubh', 	title: 'Унбигексий',	mass: 0, 			type: 'g', isotope_mass: true},
		{id: 7, 	spacer: true, 	width: 1},
		{id: 8, 	spacer: true, 	width: 1},
		{id: 9, 	spacer: true, 	width: 1},
		{id: 10, 	spacer: true, 	width: 1},
		{id: 11, 	spacer: true, 	width: 1},
		{id: 12, 	spacer: true, 	width: 1},
		{id: 13, 	spacer: true, 	width: 1},
		{id: 14, 	spacer: true, 	width: 1},
		{id: 15, 	spacer: true, 	width: 1},
	]
};