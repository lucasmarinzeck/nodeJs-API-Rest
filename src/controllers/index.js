

exports.welcomeAPI = (req, resp, next) =>{
  resp.status(200).json({
    version: 'v0.0.01',
    repo: 'TODO',
    author: 'Lucas Marinzeck',
    description: 'A NodeJs Rest API for study'});
}