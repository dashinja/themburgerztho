$(() => {
  $('.change-state').on('click', event => {
    let id = $(this).data('id');
    let newState = $(this).data('newState');

    let totalNewState = {
      devoured: newState
    };

    $.ajax('/api/burger' + id, {
      type: 'PUT',
      data: totalNewState
    }).then(() => {
      console.log('changed devour to: ', newState);

      location.reload();
      
    });
  });
});
