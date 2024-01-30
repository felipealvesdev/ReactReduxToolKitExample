import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'list',
    initialState: {
        students: [],
        studentsQuantity:0,
    },
    reducers: {
        addStudent(state, { payload }) {
            const newState = {...state, students: [...state.students, payload], studentsQuantity: state.students.length + 1}
            return newState;
        },
        removeStudent(state, { payload }) {
            if(state.studentsQuantity > 0) {

                const updatedStudents = state.students.filter((student, index)=> index!= payload - 1);

                const newState = {...state, students: updatedStudents, studentsQuantity: state.students.length - 1}
                return newState;
            }
            return state;
        }
    }
})

export const { addStudent, removeStudent } = slice.actions;

export default slice.reducer;