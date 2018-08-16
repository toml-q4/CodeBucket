PRINT 'turning off CDN'
update SystemSetting
set SettingValue='False'
where SettingName='CloudFilesEnabled'
