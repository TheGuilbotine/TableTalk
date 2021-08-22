export const LOAD_REWARDS = 'rewards/LOAD_REWARDS';
const load = rewards => ({
    type: LOAD_REWARDS,
    rewards,
});
export const getAllUserRewards = (userId) => async dispatch => {
    const res = await fetch(`/api/rewards/${userId}`);
    console.log('------------------------------------');
    console.log("you are getting all rewards");
    console.log('------------------------------------');
    if (res.ok) {
        const rewards = await res.json();
        dispatch(load(rewards.rewards));
        return res
    }
};
const initialState = [];
const rewardsReducer = (state = {}, action) => {
    if (!action) return state;
    switch (action.type) {
        case LOAD_REWARDS: {
            const newState = {...action.rewards};
            // action.rewards.forEach(reward => {
            //     newState[reward.id] = reward
            // })
            return newState;
        }
        default:
            return state;
    }
}
export default rewardsReducer;
