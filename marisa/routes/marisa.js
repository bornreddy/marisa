/*
 * Testing Marisa page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Marisa' });
};
