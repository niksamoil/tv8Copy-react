export default class GetPostsService {

	_apiBase = 'https://tv8.md/wp-json/wp/v2';
  
	getResource = async (url) => {
	  const res = await fetch(`${this._apiBase}${url}`);
  
	  if (!res.ok) {
		throw new Error(`Could not fetch ${url}` +
		  `, received ${res.status}`);
	  }
	  return await res.json();
	};
  
	getAllPosts = async () => {
	  const res = await this.getResource(`/posts/`);
	  return res;
	};



	getMedia = async () => {
		await this.getResource('/media/')
		.then((res) => {
			res.map((item) => {
				return item.media_details.sizes.medium.source_url;
			});
		});
	};
}    
