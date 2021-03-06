"use strict";

const Tweet = use("App/Models/Tweet");

/**
 * Resourceful controller for interacting with tweets
 */
class GroupController {
  /**
   * Show a list of all tweets.
   * GET tweets
   */
  async index() {
    const groups = await Tweet.query()
      .with("user")
      .fetch();

    return groups;
  }

  /**
   * Create/save a new tweet.
   * POST tweets
   */
  async store({ request, auth }) {
    const data = request.only(["content", "tweet_id"]);
    const tweet = await Tweet.create({ user_id: auth.user.id, ...data });

    return tweet;
  }

  /**
   * Display a single tweet.
   * GET tweets/:id
   */
  async show({ params }) {
    const tweet = await Tweet.findOrFail(params.id);

    return tweet;
  }

  /**
   * Delete a tweet with id.
   * DELETE tweets/:id
   */
  async destroy({ params, auth }) {
    const tweet = await Tweet.findOrFail(params.id);

    if (tweet.user_id !== auth.user.id) {
      return response.status(401);
    }

    await tweet.delete();
  }
}

module.exports = GroupController;
