import data from './data.actions';
export const addItem = (dispatch, action)=>{
    dispatch(action);
    data.saveData();
}
export const deleteItem = (dispatch, action)=>{
    dispatch(action);
    data.saveData();
}
export const editItem = (dispatch, action)=>{
    dispatch(action);
    data.saveData();
}
export const updateItem = (dispatch, action)=>{
    dispatch(action);
    data.saveData();
}