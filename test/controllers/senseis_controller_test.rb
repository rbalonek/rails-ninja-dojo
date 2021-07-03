require 'test_helper'

class SenseisControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sensei = senseis(:one)
  end

  test "should get index" do
    get senseis_url, as: :json
    assert_response :success
  end

  test "should create sensei" do
    assert_difference('Sensei.count') do
      post senseis_url, params: { sensei: { dojo_id: @sensei.dojo_id, image_url: @sensei.image_url, name: @sensei.name, wise_quote: @sensei.wise_quote } }, as: :json
    end

    assert_response 201
  end

  test "should show sensei" do
    get sensei_url(@sensei), as: :json
    assert_response :success
  end

  test "should update sensei" do
    patch sensei_url(@sensei), params: { sensei: { dojo_id: @sensei.dojo_id, image_url: @sensei.image_url, name: @sensei.name, wise_quote: @sensei.wise_quote } }, as: :json
    assert_response 200
  end

  test "should destroy sensei" do
    assert_difference('Sensei.count', -1) do
      delete sensei_url(@sensei), as: :json
    end

    assert_response 204
  end
end
