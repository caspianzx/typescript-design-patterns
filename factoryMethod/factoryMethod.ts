// The Factory Method design pattern is one of the fundamental design patterns and is a part of the “Gang of Four” design patterns.
// It aims to provide a solution for creating objects without specifying the exact class of the object that is created.

enum TEACHER_TYPE {
    CODING = 'coding',
    MUSIC = 'music',
}

class Teacher {

    name: string
    constructor(properties) {
        this.name = properties.name;
    }
}

class CodingTeacher extends Teacher{

    public programmingLanguage: string

    constructor(properties) {
        super(properties);
        this.programmingLanguage = properties.programmingLanguage;
    }
}

class MusicTeacher extends Teacher{

    public instrument: string

    constructor(properties) {
        super(properties)
        this.instrument = properties.instrument;
    }
}

class TeacherFactory {
    // this a factory method
    public static getTeacher(type: TEACHER_TYPE, properties) {
        switch (type) {
            case TEACHER_TYPE.CODING:
                return new CodingTeacher(properties);
            case TEACHER_TYPE.MUSIC:
                return new MusicTeacher(properties);
            default:
                throw new Error('Wrong teacher type chosen');
        }
    }
}

// can implement factory overload + type checking of type params but it's ugly

// interface TeacherProperties {
//   name: string;
// }
// class Teacher {
//   public name: string;
//   constructor(properties: TeacherProperties) {
//     this.name = properties.name;
//   }
// }

// interface CodingTeacherProperties {
//   name: string;
//   programmingLanguage: string;
// }
// class CodingTeacher extends Teacher {
//   public programmingLanguage: string;
//   constructor(properties: CodingTeacherProperties) {
//     super(properties);
//     this.programmingLanguage = properties.programmingLanguage;
//   }
// }

// interface MusicTeacherProperties {
//   name: string;
//   instrument: string;
// }
// class MusicTeacher extends Teacher {
//   public instrument: string;
//   constructor(properties: MusicTeacherProperties) {
//     super(properties);
//     this.instrument = properties.instrument;
//   }
// }

// class TeacherFactory {
//     public static getTeacher(type: TEACHER_TYPE.MUSIC, properties: MusicTeacherProperties): MusicTeacher;
//     public static getTeacher(type: TEACHER_TYPE.CODING, properties: CodingTeacherProperties): CodingTeacher;
//     public static getTeacher(type: TEACHER_TYPE, properties: MusicTeacherProperties & CodingTeacherProperties) {
//         switch (type) {
//             case TEACHER_TYPE.CODING:
//                 return new CodingTeacher(properties);
//             case TEACHER_TYPE.MUSIC:
//                 return new MusicTeacher(properties);
//             default:
//                 throw new Error('Wrong teacher type chosen');
//         }
//     }
// }

const codingTeacher = TeacherFactory.getTeacher(TEACHER_TYPE.CODING, {
    programmingLanguage: 'JavaScript',
    name: 'John',
});

const musicTeacher = TeacherFactory.getTeacher(TEACHER_TYPE.MUSIC, {
    instrument: 'Guitar',
    name: 'Andy',
});

console.log(codingTeacher)
console.log(musicTeacher)