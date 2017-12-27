class ApiCall
	include HTTParty
	base_uri 'se-json-api.herokuapp.com'
  #base_uri 'http://127.0.0.1:3001'

	def initialize(url, params)
    @url = url
    @params = params
  end

  def get_list
    #self.class.get("/#{@url}?" + URI.encode("page[limit]=#{@limit}&page[offset]=#{@offset}"))
    if @params['query'].blank?
      self.class.get("/#{@url}")
    else
      param_query = JSON.parse(@params['query'])
      filter_query = []
      filter_query << "filter[category]=#{param_query['category']}" if not param_query['category'].blank?
      filter_query << "filter[price][between]=#{param_query['price']}" if not param_query['price'].blank?
      if not param_query['sort'].blank?
        if param_query['sort'] == 'Price Low To High'
          filter_query << "sort=price"
        else
          filter_query << "sort=-price"
        end
      end
      if not (param_query['limit'].blank? &&  param_query['offset'].blank?)
        filter_query << "page[limit]=#{param_query['limit']}&page[offset]=#{param_query['offset']}"
      end
      self.class.get("/#{@url}?#{filter_query.join('&')}")
    end
  end

  def get_product
    self.class.get("/#{@url}/#{@params['id']}")
  end
end	