$(document).ready(() => {
  $(document).on('click', '.change-state', event => {
    let id = $(event.target).attr('data-id');
    let newState = $(event.target).attr('data-newState');
    // let newState = $(event.target).data('newState');
    // .val();
    // console.log(`I'm id: ${id} and I just got clicked.`);
    // console.log("I'm devoured state on burger button", newState);

    let totalNewState = {
      id: id,
      devoured: newState
    };

    $.ajax({
      url: '/api/burger/' + id,
      type: 'PUT',
      data: totalNewState,
      success: data => {
        // console.log('PUT request success');
      }
    }).then(() => {
      // console.log('changed devour to: ', newState);

      location.reload();
    });
  });
});
