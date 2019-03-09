$(document).ready(() => {
  $(document).on('click', '.change-state', event => {
    let id = $(event.target).attr('data-id')
    let newState = $(event.target).attr('data-newState')

    let totalNewState = {
      id: id,
      devoured: newState,
    }

    $.ajax({
      url: '/api/burger/' + id,
      type: 'PUT',
      data: totalNewState,
      success: data => {},
    }).then(() => {
      location.reload()
    })
  })
})
