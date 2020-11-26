const Branch = require('../models/Branch');

class BranchService {
  async createBranch(user_id) {
    try {
      return await Branch.create({
        created_by: user_id,
        notes_history: [],
        shared_users_info: [],
        latest_note: null,
      });
    } catch (err) {
      throw err;
    }
  }

  async getBranchByMongooseIdAndUpdate(id, branch) {
    try {
      return await Branch.findByIdAndUpdate(
        id,
        branch,
        { new: true },
      );
    } catch (err) {
      throw err;
    }
  }

  async getBranchByMongooseId(id) {
    try {
      return await Branch.findById(id);
    } catch (err) {
      throw err;
    }
  }

  async getAllBranchSharingInfo(id) {
    try {
      const result = await Branch.findById(id);
      return result.shared_users_info;
    } catch (err) {
      throw err;
    }
  }

  async deleteBranch(id) {
    try {
      await Branch.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = BranchService;
