"use strict";
/**
 * Copyright (C) 2023 Lalulla, Inc. All rights reserved.
 * Copyright (c) 2023 - Joel M. Damaso - mailto:jammi_dee@yahoo.com Manila/Philippines
 * This file is part of Lalulla System.
 *
 * LaKuboTs Framework is distributed under the terms of the GNU General Public License
 * as published by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * LaKuboTs System is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Cloud Gate System.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Framework Designed by: Jammi Dee (jammi_dee@yahoo.com)
 *
 * File Create Date: 09/11/2023
 * Created by: Jammi Dee
 * Modified by: Jammi Dee
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRoutes = (0, express_1.Router)();
//=======
// CRUDS
//=======
UserRoutes.use("/", () => { }); //JMD 09/28/2023
// Define your user-related routes here
UserRoutes.get('/', (req, res) => {
    res.render('user/user', { username: 'John' });
    //const filePath = path.join(__dirname, '../..', 'views', 'user', 'user.html');
    //res.sendFile(filePath);
});
exports.default = UserRoutes;
//# sourceMappingURL=user.route.js.map